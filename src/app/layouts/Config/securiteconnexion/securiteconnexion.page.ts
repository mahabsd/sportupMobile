import { Component, OnInit } from '@angular/core';
import { AccesshistoryService } from 'src/app/shared/Service/accesshistory.service';
import { HttpClient } from '@angular/common/http';
import { GetIpsService } from 'src/app/shared/Service/get-ips.service';
@Component({
  selector: 'app-securiteconnexion',
  templateUrl: './securiteconnexion.page.html',
  styleUrls: ['./securiteconnexion.page.scss'],
})
export class SecuriteconnexionPage implements OnInit {
  history;
  ipAddress='';
  constructor(private accessHistory: AccesshistoryService,
    private http: HttpClient,
  private getIps:GetIpsService) { }

  ngOnInit() {
    this.loadIp()
    this.accessHistory.getHistory().subscribe(
      async (response) => {
        this.history = await response;
        console.log(this.history);
    });
  }

  isActive(ip){
    if (this.ipAddress===ip){
    }
  }


  loadIp() {
    this.getIps.getIps().subscribe(async(res) => {
      await console.log(res);
    },
      (error) => {
        console.log(error);
      }
    );
  }




}
