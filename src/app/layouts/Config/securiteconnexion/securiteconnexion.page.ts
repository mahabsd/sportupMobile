import { Component, OnInit } from '@angular/core';
import { AccesshistoryService } from 'src/app/shared/Service/accesshistory.service';
import { HttpClient  } from '@angular/common/http';
@Component({
  selector: 'app-securiteconnexion',
  templateUrl: './securiteconnexion.page.html',
  styleUrls: ['./securiteconnexion.page.scss'],
})
export class SecuriteconnexionPage implements OnInit {
  history;
  ipAddress;
  constructor(private accessHistory: AccesshistoryService,private http:HttpClient) { }

  ngOnInit() {

    this.accessHistory.getHistory().subscribe(
      (response) => {
          this.history = response;


    });
  }

  isActive(ip){
    if (this.ipAddress===ip){

    }
  }

  loadIp() {
    this.http.get('https://jsonip.com').subscribe(
      (value:any) => {
        this.ipAddress = value.ip;
      },
      (error) => {
        console.log(error);
      }
    );
  }




}
