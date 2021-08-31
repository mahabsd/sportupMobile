import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  // activatedroute importer luser selon leur id
  // en utilisant lapi


  myInformation: any = { userLastName: '', userFirstName: '' };

  user: any = [];

  public folder: string;
  imagesBasic = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', description: 'Image 1'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', description: 'Image 2'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', description: 'Image 3'
    },
  ];
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(id => {
      console.log(id);

    });

    this.getUser();
  }

  getUser() {
    this.userService.getMe().subscribe((response) => {
      console.log(response);
      this.myInformation.userLastName = response.data.data.name;
    }, error => {
      console.error(error);
    }

    );

  }

  itemSelected(data) {
    console.log(data);
  }
  buttonSuivre() {
    console.log('Action Button Suivre ');
  }
  buttonBlock() {
    console.log('Action Button Block ');
  }

}
