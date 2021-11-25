import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { InsertAdherentModalPage } from '../../insert-adherent-modal/insert-adherent-modal.page';
import { AlertController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gestion-adherent',
  templateUrl: './gestion-adherent.page.html',
  styleUrls: ['./gestion-adherent.page.scss'],
})
export class GestionAdherentPage implements OnInit {
  @ViewChild('barChart') barChart;
  @ViewChild(InsertAdherentModalPage) myCal: InsertAdherentModalPage;
  showAddEvent: any;
  bars: any;
  eventSource = [];
  newEvent = {
    title: 'jujutsu',
    description: 'sience entrainement',
    startTime: '07 2021 11:00:00',
    endTime: '07 2021 12:00:00'
  };
  colorArray: any;

  constructor(
    private modalCtrl: ModalController
  ) { }
  ionViewDidEnter() {
    this.createBarChart();
  }
  ngOnInit() {

  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'adherent 1',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor:
            'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)'


        }
          ,
        {
          label: 'adherent 2',
          data: [4.5, 7.8, 3, 5.9, 9.9, 11.5, 7, 3],
          backgroundColor:
            'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.2)'

        }
          ,
        {
          label: 'adherent 3',
          data: [6.5, 4.8, 9, 2.2, 5.9, 3.5, 15, 10],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 0.2)'
          // fill: false,
          // lineTension: 0.1,
          // backgroundColor: 'rgba(75,192,192,0.4)',
          // borderColor: 'rgba(75,192,192,1)',
          // borderCapStyle: 'butt',
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: 'miter',
          // pointBorderColor: 'rgba(75,192,192,1)',
          // pointBackgroundColor: '#fff',
          // pointBorderWidth: 1,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          // pointHoverBorderColor: 'rgba(220,220,220,1)',
          // pointHoverBorderWidth: 2,
          // pointRadius: 1,
          // pointHitRadius: 10,
          // spanGaps: false,
          // borderWidth: 1
          // radius: 5

        }]
      },
      options: {
        scales: {

        },
        plugins: {
          legend: {
            display: true,
            labels: {
              boxHeight: 15,
              boxWidth: 15
            }
          }
        }
      }

      // options: {
      //   responsive: true,
      //   title: {
      //     display: true,
      //     position: "top",
      //     text: "Facebook to Instagram - Social Networking",
      //     fontSize: 12,
      //     fontColor: "#666"
      //   },
      //   legend: {
      //     display: true,
      //     position: "bottom",
      //     labels: {
      //       fontColor: "#999",
      //       fontSize: 14
      //     }
      //   }
    });
  }
  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: InsertAdherentModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
    modal.onDidDismiss().then((result) => {
      const events = [];
      const start = result.data.event.startTime;
      const newDate = new Date(start);
      const end = result.data.event.endTime;
      const newDate1 = new Date(end);
      events.push({
        title: 'Event - ',
        startTime: new Date(
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
