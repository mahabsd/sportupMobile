import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ProfilService } from './profil.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  MyInformation: any = {};
  items = [
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcDQbdfQepfnqBSeJKxbFKRrS6G_YJxu0vhw&usqp=CAU", name: 'item1', },
    { image: "https://img.aws.la-croix.com/2019/08/02/1201038998/Cinq-sports-redecouvrir_0_729_413.jpg", name: 'item2', },
    { image: "http://ionic.io/img/2.png", name: 'item3', }, { image: "https://www.ce-ildys.fr/wp-content/uploads/2019/06/differents-sports.jpg", name: 'item4', }];
  public folder: string;
imagesBasic = [
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', description: 'Image 1' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', description: 'Image 2' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', description: 'Image 3' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', description: 'Image 4' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', description: 'Image 5' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', description: 'Image 6' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', description: 'Image 7' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', description: 'Image 8' },
{ img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', thumb:
'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', description: 'Image 9' }
];
  constructor(private activatedRoute: ActivatedRoute , private profilService : ProfilService) {
    this.profilService.GetProfile().subscribe((response) => {
      console.log('my user', response);
      this.MyInformation = response;
    });
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  itemSelected(data){
console.log(data)
  }
  Button_Publication(){
    console.log('Action Button Publication ');
  }
  Button_A_Propos(){
    console.log('Action Button A Propos ')
  }
  Button_Plus(){
    console.log('Action Button Plus ')
  }
}
