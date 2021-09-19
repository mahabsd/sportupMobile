import { Component, OnInit } from '@angular/core';
import { CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from 'src/app/Shared/Service/image.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(
    private imageService: ImageService,
  ) {}

  ngOnInit() {}
  sendMessage(message) {
    // send message to subscribers via observable subject
    this.imageService.sendMessage(message);
  }

  

  add(event: any) {
    console.log(event);
  }
}
