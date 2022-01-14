import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-reports',
  templateUrl: './sum-reports.page.html',
  styleUrls: ['./sum-reports.page.scss'],
})
export class SumReportsPage implements OnInit {
  reportedProfiles = [
    {
      id: 1,
      name: "Nom",
      surname: "prénom 1",
      details: "for having done this and that"
    },
    {
      id: 2,
      name: "Nom",
      surname: "prénom 2",
      details: "for having done this and that"
    },
    {
      id: 3,
      name: "Nom",
      surname: "prénom 3",
      details: "for having done this and that"
    },
    {
      id: 4,
      name: "Nom",
      surname: "prénom 4",
      details: "for having done this and that"
    },
    {
      id: 5,
      name: "Nom",
      surname: "prénom 5",
      details: "for having done this and that"
    }
  ];
  reportedStatus = [
    {
      id: 1,
      createdBy: "Nom prénom 1",
      details: "for containing this and that"
    },
    {
      id: 2,
      createdBy: "Nom prénom 2",
      details: "for containing this and that"
    },
    {
      id: 3,
      createdBy: "Nom prénom 3",
      details: "for containing this and that"
    },
    {
      id: 4,
      createdBy: "Nom prénom 4",
      details: "for containing this and that"
    },
    {
      id: 5,
      createdBy: "Nom prénom 5",
      details: "for containing this and that"
    }
  ];
  reportedPages = [
    {
      id: 1,
      page: "page 1",
      details: "for sharing this and that"
    },
    {
      id: 2,
      page: "page 2",
      details: "for sharing this and that"
    },
    {
      id: 3,
      page: "page 3",
      details: "for sharing this and that"
    },
    {
      id: 4,
      page: "page 4",
      details: "for sharing this and that"
    },
    {
      id: 5,
      page: "page 5",
      details: "for sharing this and that"
    }
  ];
  profileOpen: boolean;
  statusOpen: boolean;
  pageOpen: boolean;
  constructor() { }

  ngOnInit() {
    this.pageOpen = false
    this.profileOpen = false
    this.statusOpen = false
  }

  toggleProfile() {
    this.profileOpen === false ? this.profileOpen = true : this.profileOpen = false
  }
  toggleStatus() {
    this.statusOpen === false ? this.statusOpen = true : this.statusOpen = false
  }
  togglePage() {
    this.pageOpen === false ? this.pageOpen = true : this.pageOpen = false
  }

}
