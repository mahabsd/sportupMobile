import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  resultsCount = 10;
  page = 0;
  totalPages = 10;
  data = [];
  bulkEdit = false;
  sortDirection = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.http.get(`https://randomuser.me/?page=${this.page}&results=${this.resultsCount}`).subscribe(res => {
      console.log('res!', res);
      this.data = res['results'];
    })
  }
  sortBy(key) {}
  toggleBulkEdit() {}
  bulkDelete() { }
  removeRow(index) {
    this.data.splice(index,1);
  }
}
