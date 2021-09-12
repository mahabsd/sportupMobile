import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ImageService } from '../../../shared/Service/image.service';
@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss'],
})
export class ImageProfileComponent implements OnInit {
  @Input() image: any;
  apImg = environment.apiImg + 'image/';
  constructor(private modalController: ModalController, private imageService: ImageService) { }

  ngOnInit() { 
    console.log(this.image);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  supprimer(image) {
    this.imageService.deleteimage(image.id).subscribe(res => {
      console.log(res);
      this.dismiss();

    })
  }
  modifier(image) {

  }
}
