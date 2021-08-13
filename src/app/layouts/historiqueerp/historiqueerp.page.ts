import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historiqueerp',
  templateUrl: './historiqueerp.page.html',
  styleUrls: ['./historiqueerp.page.scss'],
})
export class HistoriqueerpPage implements OnInit {
    checkedEvents = [1];
  events = [
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
  ];

  constructor() { }


  addEventChecked(event)
  {
    this.checkedEvents.push(event);
  }

  check(event)
  {
    if (this.checkedEvents.includes(event))
    {return true;}
    
    return false;
  }
  ngOnInit() {
  }

}
