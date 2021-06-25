import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { InsertEspaceModalPage } from '../insert-espace-modal/insert-espace-modal.page';
import { AlertController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gestion-espace',
  templateUrl: './gestion-espace.page.html',
  styleUrls: ['./gestion-espace.page.scss'],
})
export class GestionEspacePage implements OnInit {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
    ionViewDidEnter() {
    this.createBarChart();
    }
  
    createBarChart() {
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
          datasets: [{
            label: 'effectif 1',
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ]
            
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
  @ViewChild(InsertEspaceModalPage) myCal: InsertEspaceModalPage;
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
      component: InsertEspaceModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
    modal.onDidDismiss().then((result) => {
      console.log('ggggggg', result.data);
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
      console.log(events)
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
