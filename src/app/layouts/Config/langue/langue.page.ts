import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.page.html',
  styleUrls: ['./langue.page.scss'],
})
export class LanguePage implements OnInit {
  public fish: string;

  constructor(public storage: Storage) { }
  selectLanguage(event) {
    console.log('SELECT ', event.target.value);
    this.storage.set('lan',event.target.value);
  }
 
  ngOnInit() {
    this.storage.get('lan').then((val) => {
      console.log('Your age is', val);
    });
  }

}
