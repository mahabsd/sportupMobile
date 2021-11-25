import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Chart, ChartType } from 'chart.js';
import {  ChartOptions } from 'chart.js';
import { InsertMaterialModalPage } from '../../insert-material-modal/insert-material-modal.page';

@Component({
  selector: 'app-gestion-material',
  templateUrl: './gestion-material.page.html',
  styleUrls: ['./gestion-material.page.scss'],
})
export class GestionMaterialPage implements OnInit  {
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
            label: 'material  1',
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor:
              'rgba(255, 99, 132, 0.2)',
              borderColor:'rgba(255, 99, 132, 0.2)'


          }
          ,
            {
              label: 'material 2',
              data: [3.5, 4.8, 6, 7.9, 7.9, 8.5, 11, 18],
              backgroundColor:
                'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 0.2)'

              }
              ,
              {
                label: 'material 3',
                data: [4.5, 5.8, 7, 8.9, 8.9, 9.5, 12, 19],
                backgroundColor:
                  'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 0.2)',

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
  // @ViewChild('barCanvas') private barCanvas: ElementRef;
  // @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  // @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  // barChart: any;
  // doughnutChart: any;
  // lineChart: any;
  // @ViewChild('barChart') barChart;
  // bars: any;
  // colorArray: any;


  // ionViewDidEnter() {
  //   this.createBarChart();
  // }

  // createBarChart() {
  //   this.bars = new Chart(this.barChart.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  //       datasets: [{
  //         label: 'Viewers in millions',
  //         data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
  //         backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
  //         borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {

  //       }
  //     }
  //   });
  // }
  @ViewChild(InsertMaterialModalPage) myCal: InsertMaterialModalPage;
  showAddEvent: any;
  eventSource = [];
  newEvent = {
    title: 'jujutsu',
    description: ' science entrainment',
    startTime: '07 2021 11:00:00',
    endTime: '07 2021 12:00:00'
  };
  constructor(private modalCtrl: ModalController) { }
  // ngAfterViewInit() {
  //   this.barChartMethod();
  //   this.doughnutChartMethod();
  //   this.lineChartMethod();
  // }
  // barChartMethod() {
  //   this.barChart = new Chart(this.barCanvas.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [200, 50, 30, 15, 20, 34],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

  // doughnutChartMethod() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [50, 29, 15, 10, 7],
  //         backgroundColor: [
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)'
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384'
  //         ]
  //       }]
  //     }
  //   });
  // }

  // lineChartMethod() {
  //   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
  //       datasets: [
  //         {
  //           label: 'Sell per week',
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: 'rgba(75,192,192,0.4)',
  //           borderColor: 'rgba(75,192,192,1)',
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: 'rgba(75,192,192,1)',
  //           pointBackgroundColor: '#fff',
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)',
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
  //           spanGaps: false,
  //         }
  //       ]
  //     }
  //   });
  // }
  ngOnInit() {

  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: InsertMaterialModalPage,
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
