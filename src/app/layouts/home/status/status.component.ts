import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Gesture, GestureController, IonButton, IonCard, NavController, PopoverController } from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements AfterViewInit {
  @ViewChildren(IonButton, { read: ElementRef }) buttons: QueryList<ElementRef>;
  longPressActive = false;

  constructor(private navCtrl: NavController,
    private gestureCtrl: GestureController,
    private popoverCtrl: PopoverController) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  ngAfterViewInit() {
    const cardArray = this.buttons.toArray();
    this.showReactions(cardArray);
    console.log(cardArray);

  }
  showReactions(cardArray) {
    console.log(cardArray[0]);

    for (const i of cardArray) {
      const card = i;


      console.log('event', i);
      const gesture: Gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        threshold: 15,
        gestureName: 'long',
        onStart: ev => {
          console.log(ev);

          this.longPressActive = true;
        },
        onEnd: ev => {

          this.longPressActive = false;
        }

      });
      // const reactions = await this.popoverCtrl.create({ component: ReactionsPage, event });
      // await reactions.present();

    }
  }
  like() {
    console.log('like');

  }
}
