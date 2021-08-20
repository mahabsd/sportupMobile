import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-mesures',
  templateUrl: './mesures.page.html',
  styleUrls: ['./mesures.page.scss'],
})
export class MesuresPage implements OnInit {
  @Input() model_title: any;
  constructor(private modalcontroller: ModalController) { }

  ngOnInit() {
    //console.log(this.model_title)

  }

  CloseModal() {
    this.modalcontroller.dismiss();
  }

}
