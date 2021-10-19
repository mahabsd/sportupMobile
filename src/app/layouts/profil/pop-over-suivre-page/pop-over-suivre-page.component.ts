import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-over-suivre-page',
  templateUrl: './pop-over-suivre-page.component.html',
  styleUrls: ['./pop-over-suivre-page.component.scss'],
})
export class PopOverSuivrePageComponent implements OnInit {
  @Input() idpassed: string;

  constructor(private router: Router) { }
  dismissPopover(msg)
  {
      console.log(msg);
      
  }
  ngOnInit() {
    console.log(this.idpassed)
  }
  wochat(){
  console.log(this.idpassed)

  this.router.navigate(["chat", this.idpassed]);

}
}
