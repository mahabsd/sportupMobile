import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  close() {
    this.modalCtrl.dismiss();
  }
}
