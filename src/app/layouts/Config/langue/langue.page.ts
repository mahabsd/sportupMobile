import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.page.html',
  styleUrls: ['./langue.page.scss'],
})
export class LanguePage implements OnInit {
  public lang: string;


  constructor(public storage: Storage) { }
  selectLanguage(lang) {
    this.storage.set('lan',lang);
  }

  setFrench() {
    this.lang="french"
  }
  setEnglish() {
    this.lang="english"
  }

  setSpanish() {
    this.lang="spanish"
  }


  ngOnInit() {
    this.storage.get('lan').then((val) => {
      this.lang = val
      console.log(this.lang);
    });
  }

}
