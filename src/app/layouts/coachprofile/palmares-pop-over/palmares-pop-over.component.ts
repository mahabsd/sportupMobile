import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-palmares-pop-over',
  templateUrl: './palmares-pop-over.component.html',
  styleUrls: ['./palmares-pop-over.component.scss'],
})
export class PalmaresPopOverComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  palamares() {
    this.router.navigateByUrl('tabs/layouts/palmares');
  }
  // closemodal
}
