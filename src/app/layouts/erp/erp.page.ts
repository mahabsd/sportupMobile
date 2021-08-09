import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.page.html',
  styleUrls: ['./erp.page.scss'],
})
export class ErpPage implements OnInit {
  price: 1;
  constructor() { }

  ngOnInit() {
  }
  getItem(num) {
    this.price = num;

  }



  getColor(i) {
    if (i == this.price)
      return "medium"
    else
      return "light"
  }
}
