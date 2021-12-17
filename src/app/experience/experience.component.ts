import { Component, OnInit } from '@angular/core';
import * as data from '../jobs.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  jobList: any;
  ngOnInit() {
    this.sortJobsinOrder();
  }

  sortJobsinOrder() {
    this.jobList = data;
    this.jobList = this.jobList.default.jobs;
    this.jobList.sort(function (a, b) {
      return b.startYear - a.startYear;
    });
  }
}


