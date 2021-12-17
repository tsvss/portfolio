import { Component, OnInit } from '@angular/core';
import * as data from '../jobs.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  jobData:any;
  currentJob:any;
  ngOnInit() {
    this.getCurrentJobDetails();
  }

  getCurrentJobDetails(){
    this.jobData = data;
    this.jobData = this.jobData.default.jobs;

    this.currentJob = this.jobData.filter(x => x.currentJob == true)[0];
  }

}
