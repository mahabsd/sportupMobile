import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../Shared/Service/post.service';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss'],
})
export class ParametresComponent implements OnInit {
  @Input() post: any;
  constructor(
    private postService: PostService,
    private alertController: AlertController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    console.log(this.post);
  }
  deletePost(post) {
    console.log(post._id);

    this.postService.deletePost(post).subscribe(async res => {
      console.log(res);
      await this.popoverController.dismiss();
    })
  }

  async alertDelete(post) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Voullez vous vraiment supprimer cette status!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('ok');

          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deletePost(post);

          }
        }
      ]
    });

    await alert.present();
  }
}
