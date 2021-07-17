import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.page.html',
  styleUrls: ['./langue.page.scss'],
})
export class LanguePage implements OnInit {
  public fish: string;

  constructor() { }
  fishyHandler(event) {
    // get data throught event emitter
    this.fish = event.target.value;
  }
  leaveFish(event) {
    console.log('SELECT ', event.target.value);
  }
  goFish(event) {
    console.log('SELECT ', event.target.value);
  }
  ngOnInit() {
  }

}
