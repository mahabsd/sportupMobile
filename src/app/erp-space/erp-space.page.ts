import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-erp-space',
  templateUrl: './erp-space.page.html',
  styleUrls: ['./erp-space.page.scss'],
})
export class ErpSpacePage implements OnInit {

  public folder: string;
  private currentColor: string
  constructor(private activatedRoute: ActivatedRoute) { 

    this.currentColor = 'secondary';

  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  itemSelected(data) {
    console.log(data)
  }
  Button_Publication() {
    console.log('Action Button Publication ')
  }
  Button_A_Propos() {
    console.log('Action Button A Propos ')
  }
  Button_Plus() {
    console.log('Action Button Plus ')
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
