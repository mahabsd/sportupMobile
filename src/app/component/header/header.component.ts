import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TopMenuComponent } from 'src/app/layouts/erp/top-menu/top-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() color: 'primary';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() isModal: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() isDetails: boolean = false;
  @Input() isEllipsis: boolean = false;
  @Input() isOption: boolean = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  close() {
    this.modalCtrl.dismiss();
  }



  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TopMenuComponent,
      cssClass: 'erp-parametre-modal'
    });
    return await modal.present();
  }
}
