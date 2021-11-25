import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { InsertFacteurModalPage } from '../../insert-facteur-modal/insert-facteur-modal.page';
import { AlertController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gestion-facturation',
  templateUrl: './gestion-facturation.page.html',
  styleUrls: ['./gestion-facturation.page.scss'],
})
export class GestionFacturationPage implements OnInit {


  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
    ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'effectif 1',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor:
          'rgba(255, 99, 132, 0.2)'


        }
        ,
          {
            label: 'effectif 2',
            data: [3.5, 4.8, 6, 7.9, 7.9, 8.5, 11, 18],
            backgroundColor:
            'rgba(54, 162, 235, 0.2)'

            }
            ,
            {
              label: 'effectif 3',
              data: [4.5, 5.8, 7, 8.9, 8.9, 9.5, 12, 19],
              backgroundColor:
              'rgba(75, 192, 192, 0.2)'

            }]
      },
      options: {
        scales: {

        },
        plugins: {
          legend: {
              display: true,
              labels: {
              boxHeight:15,
              boxWidth:15      }
          }
      }
      }
    });
  }
  @ViewChild(InsertFacteurModalPage) myCal: InsertFacteurModalPage;
  showAddEvent: any;
  eventSource = [];
  newEvent = {
    title: 'jujutsu',
    description: 'sience entrainement',
    startTime: '07 2021 11:00:00',
    endTime: '07 2021 12:00:00'
  };
  constructor(  private modalCtrl: ModalController) { }
  ngOnInit() {
  }
  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: InsertFacteurModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
    modal.onDidDismiss().then((result) => {
      var events = [];
      let Start = result.data.event.startTime
      let newDate = new Date(Start);
      let End = result.data.event.endTime
      let newDate1 = new Date(End);
      events.push({
        title: 'Event - ' ,
        startTime:new Date(
          newDate.getFullYear(),
          newDate.getMonth(),
          newDate.getDate()
              ),
        endTime: new Date(
          newDate1.getFullYear(),
          newDate1.getMonth(),
          newDate1.getDate()
              ),
        allDay: false,
      });
      this.eventSource = events;
    });
  }
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

}
